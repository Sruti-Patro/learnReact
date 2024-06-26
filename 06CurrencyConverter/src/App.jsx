import { useState } from "react";
import "./App.css";
import useCurrencyInfo  from "./HooksCustom/useCurrencyInfo";
import InputBoxS from "./components/InputBoxS";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  //useEffect(()=>{set},[selectCurrency])

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/010/405/907/original/swindler-try-to-access-internet-transaction-wallet-and-stole-all-currency-illegal-transfer-to-app-mobile-online-crime-concept-vector.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBoxS 
                label="From" 
                amount={amount} 
                currencyOption={options}
                onCurrencyChange={(currency)=> {setAmount(amount); setFrom(currency)}}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)} />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBoxS 
                  label="To"
                  amount={convertedAmount} 
                  currencyOption={options}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  selectCurrency={to} 
                  amountDisable />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
