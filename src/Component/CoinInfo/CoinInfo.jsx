import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { Chart } from "chart.js/auto";
import { chartDays } from "../../Helper/constant";

function CoinInfo({historicData,setDays,setInterval,days,currency}){
    Chart.register(CategoryScale);
    if(!historicData){
        return <ErrorComponent error="No Data Avaliable" type="info"/>
    }
    function selectHandeler(e){
        const date = e.target.options[e.target.selectedIndex].value;
        if(date == 1){
            setInterval("");
        }else{
            setInterval("daily");
        }
        setDays(e.target.options[e.target.selectedIndex].value);
    }
    return(
        <div className="flex flex-col items-center justify-center mt-6 px-6 w-full">
            <div className="h-[500px] w-full">
                <Line 
                    data={{

                        labels:historicData.prices.map(coinPrice =>{
                            let date = new Date(coinPrice[0]);
                            let time = date.getHours() > 12 ? `${date.getHours()-12}:${date.getMinutes} PM`: `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1? time:date.toLocaleDateString();
                        }),
                        datasets:[
                            {
                                label:`Price (Past ${days} Days in ${currency.toUpperCase()})`,
                                data: historicData.prices.map(coinPrice=>coinPrice[1]),
                            }
                        ]

                    }}
                    options={{
                        responsive:true,
                        maintainAspectRatio:false,
                        elements:{
                            point:{
                                radius:0
                            }
                        }
                    }}  
               />
            </div>
            <div className="flex justify-center mt-5 w-full">
               <select className="select select-primary w-full max-w-xs" onChange={selectHandeler}>
                   {chartDays.map((days,index)=>{
                      return(
                        <option selected={days == days.value} key={index} value={days.value}>{days.label}</option>
                      );
                   })}
               </select>
            </div>
        </div>
    );
}

export default CoinInfo;