import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import ClassList from "../ClassList";

export default function CountDown(){
  
    constructor(props)
    {
        super(props);
        this.state = { datas : "",setCurrentDay:"",lecLists=[],nxt=0 };
    }
    
            function setDay(){  
            var n =  new Date().getDay();
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            this.setState({setCurrentDay:days[n]})  ;
            this.setState({datas:ClassList(this.state.setCurrentDay)});
        }

            function setTimings(){
            
            
            datas.forEach(async(l)=>{
                this.state.lecLists.push(l.from)
            })
        }

            function renderCount(){
               
                if (lecLists.length == 0){
                    setDay()
                    setTimings()
                    renderCount()
                }
                else{
                    const nextClassTime = this.state.nxt;
                    const currentTime = new Date().getTime()
                   
                    if (nextClassTime-currentTime > 0){
                        const gap = nextClassTime-currentTime
                    }
                    else if (currentTime>nextClassTime && currentTime<=(nextClassTime+2400000)){
                        const gap = 0;
                        
                    }
                    else{
                        this.state.lecLists.pop()
                        this.setState({nxt:lecLists[0]})
                    }
                        
                    const sec = 1000;
                    const min = sec*60;
                    const hr = min*60;
                    const day = hr*24;
                
                    const daysMore = Math.floor(gap/day);
                    const hoursMore = Math.floor((gap%day)/hr);
                    const minsMore = Math.floor((gap%day)/min);
                    const secsMore = Math.floor((gap%day)/sec);  
                    
                    return(
                        <div className="container">
                            <div className="container">
                                You have a class in
                            </div>
                            <div className = "container">
                                {daysMore}:{hoursMore}:{minsMore}:{secsMore}
                            </div>
                        </div>
                    ) 
                }



                
            }
    
    if (lecLists.length == 0){
        setDay()
        setTimings()
    }
    else{

        setInterval(renderCount(),1000)
        
    }



    
}
