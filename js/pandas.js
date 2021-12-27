var CLAIM_INPUT, MP_CONTRACT, NUMFREE=0, MP_CLAIM, MP_MAX;

var PROVIDER, SIGNER, ADDR, CASE_SENSITIVE_ADDR, STATE;

/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

var MP_ADDR = "0xD00e79629E2053D837285c74a0Ec09f51b33c141";

const sosAddress = "0x3b484b82567a09e2588A13D54D032153f0c0aEe0";
const sosAbi = ()=>{
        return `[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_signer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"ADDR_DAO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDR_LP","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDR_STAKING","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AMOUNT_AIREDROP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AMOUNT_DAO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AMOUNT_LP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AMOUNT_STAKING","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_CALL_HASH_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountV","type":"uint256"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
};

const sosMinterAddress = "0x6b6F8Dd758b9f01021F214c76Df3aA9C98002c49";
const sosMinterAbi = ()=> {
        return `[{"inputs":[{"internalType":"address","name":"_erc20Address","type":"address"},{"internalType":"address","name":"_expAddress","type":"address"},{"internalType":"address[]","name":"payees","type":"address[]"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ERC20PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20Address","type":"address"}],"name":"setERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"}],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferPandaOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]`;        
}

var sos;
var sosMinter;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// var MP_ADDR = "0xcf9d3fd42c2b4570cab942ff481c523b89f61e68";

// const sosAddress = "0x8120cF57824551e9CAD5741198639AF5E1d8139f";
// const sosAbi = ()=> {
//         return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
// }

// const sosMinterAddress = "0xba380D6873F593209040C701C448a87903E66185";
// const sosMinterAbi = ()=> {
//         return `[{"inputs":[{"internalType":"address","name":"_erc20Address","type":"address"},{"internalType":"address","name":"_expAddress","type":"address"},{"internalType":"address[]","name":"payees","type":"address[]"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ERC20PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20Address","type":"address"}],"name":"setERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"}],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferPandaOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]`;
// }

// var sos;
// var sosMinter;

/*********************************END CONFIG************************************/


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
        sos = new ethers.Contract(sosAddress, sosAbi(), PROVIDER.getSigner());
        sosMinter = new ethers.Contract(sosMinterAddress, sosMinterAbi(), PROVIDER.getSigner());
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

const approveSOSAllowance = async()=>{
        const limit = '30000000000000000000000000';
        const currentAllowance = await sos.allowance(ADDR, sosMinterAddress);
        if (currentAllowance >= limit) {
            displayErrorMessage(`Allowance already approved!`);
            return;
        };
        await sos.approve(sosMinterAddress, limit).then( async(tx_) => {
            $("#approveButton").html(`Awaiting Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
        });
    };
    
const checkSOSApprovedStatus = async()=>{
        const limit = '20000000000000000000000000';
        const currentAllowance = await sos.allowance(ADDR, sosMinterAddress);
        if (currentAllowance >=  limit) {
                $("#sos-approval-section").addClass("hidden");
                return true;
        }
        else {
                $("#sos-approval-section").removeClass("hidden");
                return false;
        }
};

async function claimWithSOS() {
        if (!(await checkSOSApprovedStatus())) {
                $("#sos-approval-section").removeClass("hidden");       
        }
        else {
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
                        STATE = await sosMinter.purchase(numToClaim);
                } catch(e) {
                        document.querySelector( "#errorText" ).innerHTML = e.message;
                        document.getElementById("errorMessage").style.display="block";
                        console.log(e.reason);
                }
        
                await mpInit();
        }
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
                purchaseBtn.innerHTML = "MINT WITH ETH";
                $("#sos-purchase-btn").removeClass("hidden");
                $("#mint-costs").removeClass("hidden");
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
        $("#sos-cost").html(Number(ethers.utils.formatEther(await sosMinter.mintPrice())).toFixed(0));
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

setInterval(async()=>{
        if (!($("#sos-approval-section").hasClass("hidden"))) {
                await checkSOSApprovedStatus();
        }
    }, 5000)

window.addEventListener( "load", main );