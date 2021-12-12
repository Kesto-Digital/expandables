var CLAIM_INPUT, MP_CONTRACT, NUMFREE=0, MP_CLAIM, MP_MAX;
var MP_ADDR = "0xD00e79629E2053D837285c74a0Ec09f51b33c141";

var PROVIDER, SIGNER, ADDR, CASE_SENSITIVE_ADDR, STATE;
function printf( s, a )
{
        var S=s, i;
        for( i=0; i<a.length; i++ )
        {
                if ( typeof a[i] !== "undefined" )
                {
                        S = S.replace( '%s', a[i].toString() );
                } else {
                        S = S.replace( '%s', "[undefined]" );
                }
        }
        return S;
}
async function initMetamask()
{
        await ethereum.request( {method:"eth_requestAccounts"} );
        PROVIDER = new ethers.providers.Web3Provider( window.ethereum )
        ADDR = PROVIDER.provider.selectedAddress;
        CASE_SENSITIVE_ADDR = ethers.utils.getAddress( ADDR );
}
async function getContract( contractAddr, abiPath )
{
        const signer = PROVIDER.getSigner();
        const abiObj = await fetch( abiPath ).then( e=>e.json() );
        var abi = ( abiObj.hasOwnProperty("abi") ?  abiObj.abi : abiObj );
        const contract = new ethers.Contract( contractAddr, abi, signer.connectUnchecked() );
        return contract;
}
function checkEtherscan()
{
        window.open( "https://etherscan.io/tx/"+STATE.hash );
}



function decrementClaim()
{
        if ( !NUMFREE ) return;
        updateClaim( parseInt(CLAIM_INPUT.innerText) - 1 );
}
function incrementClaim()
{
        if ( !NUMFREE ) return;
        updateClaim( parseInt(CLAIM_INPUT.innerText) + 1 );
}
function updateClaim( s, reset )
{
        var S = s.toString().replace(/[^0-9]+/g,"");
        var n = Number(s);
        if ( isNaN(n) ){ n = 0; }
        var cursorPos = window.getSelection().focusOffset;
        if ( !CLAIM_INPUT ) return;
        CLAIM_INPUT.innerText = Math.max(0,Math.min(n,NUMFREE));
        if ( reset )
        {
                resetCursor( CLAIM_INPUT, cursorPos );
        }
}

async function getRemainingMPs()
{
        const snapshotPath = "json/merkle_root_team.json";
        const snapshotData = await fetch( snapshotPath ).then( e=>e.json() );
        MP_CLAIM = snapshotData.claims[CASE_SENSITIVE_ADDR];
        if ( typeof MP_CLAIM === "undefined" ){ return 0; }
        MP_MAX = parseInt( MP_CLAIM.amount );
        const claimedBN = await MP_CONTRACT.claimedFreeTokens( ADDR );
        const claimed = parseInt( claimedBN._hex );
        return MP_MAX - claimed;
}
// async function getDialog( file )
// {
//         var fname = printf( "%s?_=%s", [file,rand()] );
//         var resp, html, wrap, el;

//         resp = await fetch( fname );
//         html = await resp.text();

//         wrap = doc.createElement( "div" );
//         wrap.innerHTML = html;

//         clearDialogs();
//         doc.body.appendChild( wrap.firstElementChild );
//         switch( file )
//         {
//                 case "mp-dialog-02.html":
//                         const num = CLAIM_INPUT.innerText;
//                         const claimedEl = doc.querySelector( "#mp-num-claimed" );
//                         claimedEl.innerHTML = num + " BLOOT DRIP";
//                         break;
//                 default:
//                         break;
//         }

//         updateDialogTransforms();
// }
async function claim()
{
        if ( !ADDR )
        {
                await mpInit();
                return;
        }
        CLAIM_INPUT = CLAIM_INPUT || document.querySelector( "#mp-claim" );
        if ( CLAIM_INPUT.innerText === "0" )
        {
                return;
        }
        var numToClaim = parseInt( CLAIM_INPUT.innerText );
        try {
                STATE = await MP_CONTRACT.whiteListMintFree(
                        numToClaim,
                        MP_CLAIM.index,
                        MP_MAX,
                        MP_CLAIM.proof
                );
        } catch(e) {
                console.log(e.reason);
                nicePopup( "Error:\n", e.reason );
        }

        getDialog( "mp-dialog-01.html" );
        const success = await STATE.wait();
        if ( success.status === 1 )
        {
                getDialog( "mp-dialog-02.html" );
        } else {
                getDialog( "mp-dialog-03.html" );
        }

        await mpInit();
}
async function mpInit()
{
        await initMetamask();
        if ( !ADDR ){ return; }

        MP_CONTRACT = await getContract( MP_ADDR, "json/Expandables.json");
        CLAIM_INPUT = document.querySelector( "#mp-claim" );
        NUMFREE = await getRemainingMPs();
        var purchaseBtn = document.querySelector( "#mp-purchase-btn" );
        if ( purchaseBtn )
        {
                purchaseBtn.innerHTML = "MINT";
        }
        document.querySelector( "#mp-there-are-12" ).innerHTML =
                printf(
                        'THERE ARE %s EXPANDABLES RESERVED FOR YOU.<br>' +
                        'HOW MANY WOULD YOU LIKE TO CLAIM?',
                        [ NUMFREE ]
                );

        updateClaim( NUMFREE );
}
async function mpMain()
{
        await mpInit();
}

// MAIN
async function main()
{
        // alert( "test" );
        mpMain();

}

window.addEventListener( "load", main );