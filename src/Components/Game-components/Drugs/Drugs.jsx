import { useEffect, useState } from "react";
import axios from "axios";
import "./Drugs.scss"

const Drugs = () => {
  const [drugs, setDrugs] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getDrugs = async () => {
      try {
        const res = await axios("https://cima.aemps.es/cima/rest/psuministro");
        console.log(res);
        // const {info, results} = await res.json(); //  Fetch
        const { info, resultados } = res.data;
        setDrugs(resultados);
        setInfo(info);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getDrugs();
  }, []); // [] quiere decir que solo se ejecuta una vez
 
  
  return (
    <> 

       <div id="showScroll" class="container">
	<div class="receipt">
		<h1 class="logo">CVS/pharmacy</h1>
		<div class="address">
			2910 Buford Hwy NE Atlanta, GA
		</div>
		<div class="transactionDetails">
			<div class="detail">Reg#17</div>
			<div class="detail">TRN#1313</div>
			<div class="detail">CSHR#00097655</div>
			<div class="detail">str#9852</div>
		</div>
		<div class="transactionDetails">
			Helped by: Garrett
		</div>
		<div class="centerItem bold">
			<div class="item">ExtraCare Card #: *********1875</div>
		</div>
		<div class="transactionDetails">
        {drugs.map((drug) => {
          return (
            <div className="drugs" key={drug}>    
			{
				console.log("drugsss10 : ",drugs[10])
			}
			<div class="detail"><b>nombre :</b> {drug.nombre}</div>
			<div class="detail"> <b>precio :</b> {drug.tipoProblemaSuministro} ETH</div>
			<div class="detail"> <b>stock :</b> {drug.ffin} uds</div>    
            <hr/>     
            </div>
          );
        })}   
		</div>
		<div class="transactionDetails">
			<div class="detail">2</div>
			<div class="detail">Milk Duds</div>
			<div class="detail">2.99</div>
		</div>
		<div class="survey bold">
			<p>Survey ID #</p>
			<p class="surveyID">6588 4755 3256 544 21</p>
		</div>
		<div class="paymentDetails bold">
			<div class="detail">TOTAL</div>
			<div class="detail">9.97</div>
		</div>
		<div class="paymentDetails">
			<div class="detail">CHARGE</div>
			<div class="detail">9.97</div>
		</div>
		<div class="paymentDetails">
			<div class="detail">************4023</div>
			<div class="detail">CH</div>
		</div>
		<div class="creditDetails">
			<p>VISA CREDIT &nbsp;&nbsp;&nbsp;&nbsp; ****************</p>
			<p>approved# 09773B</p>
			<p>ref# 013589</p>
			<p>tran type: SALE</p>
			<p>AID: 30000000090755</p>
			<p>TC: B7A2A4044AEE380A4</p>
			<p>terminal: 69010003</p>
			<p>no signature required</p>
			<p>CVM: 1e0300</p>
			<p>TMR(95): 0080081111</p>
			<p>TS(9B): E900</p>
		</div>
		<div class="paymentDetails">
			<div class="detail">CHANGE</div>
			<div class="detail">.00</div>
		</div>
		<div class="receiptBarcode">
			<div class="barcode">
            <img src="https://www.cognex.com/BarcodeGenerator/Content/images/isbn.png"></img>
			</div>
			2003 0998 9000 8730 21
		</div>
		<div class="returnPolicy bold">
			Returns with receipt, subject to CVS Return Policy, thru 12/04/2019
		</div>
		<div class="returnPolicy">
			<div class="detail">October 5, 2019</div>
			<div class="detail">10:16 AM</div>
		</div>
		<div class="tripSummary">
			<div class="bold">Trip Summary:</div>
			<div class="item">
				<div>Today You Saved:</div>
				<div>.00</div>
			</div>
			<div class="item">
				<div>Savings Value</div>
				<div>0%</div>
			</div>
		</div>
		<div class="feedback">
			<div class="break">
				***************************
			</div>
			<p class="center">
				We would love to hear your feedback on your recent experience with us. This survey will only take 1 minute to complete.
			</p>
			<h3 class="clickBait">Share Your Feedback</h3>
			<h4 class="web">www.CVSHealthSurvey.com</h4>
			<p class="center">
				Hablamos español
			</p>
			<div class="break">
				***************************
			</div>
		</div>
		<div id="coupons" class="coupons">

			<div class="couponContainer">
				<h1 class="logo">CVS/pharmacy</h1>
				<div class="discount">$2.00 off</div>
				<div class="discountDetails">$2.00 off COLEGATE Toothbrush, Toothpaste, or Mouthwash</div>
				<div class="expiration">
					<div class="item bold">
						Expires 12/12/2019
					</div>
					<div class="item">
						Up to $2 Value
					</div>
				</div>
				<div class="barcode">
					<img src="https://www.cognex.com/BarcodeGenerator/Content/images/isbn.png"></img>
				</div>
				<div class="barcodeID center">
					9007 9876 9087 7665 62
				</div>
				<div class="legal center">
					ExtraCare card required. Excludes lottery, money orders, postage stamps, milk, prescriptions, pre-paid cards, gift cards, pseudoephedrine products, other fees, deposits, taxes, alcohol and local exclusions. No cash back. Tax charged on pre-coupon price
					where required. Limit of one purchase-based coupon, i.e., $4 off $20 purchase, per transaction. Not valid in specialty centers within CVS.
				</div>
				<div class="couponBottom">
					<p>ExtraCare Card #: *7140 00130030598777</p>
					<p>CPN#: 85887</p>
				</div>
			</div>
		
		</div>
	</div>
</div>
	

      
    </>
  );
};

export default Drugs;


