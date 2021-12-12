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
        updateClaim( parseInt(CLAIM_INPUT.innerText) - 1 );
}
function incrementClaim()
{
        updateClaim( parseInt(CLAIM_INPUT.innerText) + 1 );
}
function updateClaim( s, reset )
{
        var S = s.toString().replace(/[^0-9]+/g,"");
        var n = Number(s);
        if ( isNaN(n) ){ n = 0; }
        var cursorPos = window.getSelection().focusOffset;
        if ( !CLAIM_INPUT ) return;
        CLAIM_INPUT.innerText = Math.max(0,Math.min(n,10));
        if ( reset )
        {
                resetCursor( CLAIM_INPUT, cursorPos );
        }
}

async function getRemainingMPs()
{
        const snapshotPath = "json/merkle_root_result.json";
        const snapshotData = await fetch( snapshotPath ).then( e=>e.json() );
        MP_CLAIM = snapshotData.claims[CASE_SENSITIVE_ADDR];
        if ( typeof MP_CLAIM === "undefined" ){ return 0; }
        MP_MAX = parseInt( MP_CLAIM.amount );
        const claimedBN = await MP_CONTRACT.claimedTokens( ADDR );
        const claimed = parseInt( claimedBN._hex );
        return MP_MAX - claimed;
}

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
        let overrides = {
            value: ethers.BigNumber.from("69000000000000000").mul( numToClaim )
        };
        try {
                STATE = await MP_CONTRACT.mint(
                        numToClaim,
                        overrides
                );
        } catch(e) {
                document.querySelector( "#errorText" ).innerHTML = e.message;
                document.getElementById("errorMessage").style.display="block";
                console.log(e.reason);
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

        let nrMinted = await MP_CONTRACT.totalSupply()

        var purchaseBtn = document.querySelector( "#mp-purchase-btn" );
        if ( purchaseBtn )
        {
                purchaseBtn.innerHTML = "MINT";
        }

        document.querySelector( "#mp-there-are-12" ).innerHTML =
                printf(
                        'HOW MANY WOULD YOU LIKE TO MINT?',
                        [ NUMFREE ]
                );                



        document.querySelector( "#nrMinted" ).innerHTML =
                printf(
                        '%s/3333 MINTED',
                        [ nrMinted ]
                );                

        updateClaim( 5 );
}
async function mpMain()
{
        await mpInit();
}

// MAIN
async function main()
{
        mpMain();

}

window.addEventListener( "load", main );