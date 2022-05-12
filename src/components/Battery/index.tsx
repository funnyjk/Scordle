import * as React from 'react';
import {useState, useEffect} from "react";
const moment = require('moment');

import {convertHMtoMs, convertMsToHM} from '../../functions/convertMstoHM';

const timeFormat = (value: any, needDate: boolean) => {
    let _time = undefined;
    if (value) {
        if(needDate) {
            _time = moment(value, "HH:mm").format( moment.DATETIME_LOCAL).substring(0, 16);
        } else {
            _time = moment(value, moment.DATETIME_LOCAL).format("HH:mm");
        }
    }
    return _time;
}

const getTime = (time: any, needDate:boolean) => {
    if(needDate) {
        return moment(time, moment.DATETIME_LOCAL);
    } else {
        return moment(time, "HH:mm");
    }
}

const getTimeFlip = (time: any, needDate: boolean) => {
    if(!needDate) {
        return moment(time, moment.DATETIME_LOCAL);
    } else {
        return moment(time, "HH:mm");
    }
}

const Battery = () => {
 

    const [needDate, setNeedDate] = useState<boolean>(false);

    const [startPercent, setStartPercent] = useState<any>(0);
    const [startTime, setStartTime] = useState<any>("08:42");

    const [endPercent, setEndPercent] = useState<any>(0);
    const [endTime, setEndTime] = useState<any>("19:35");

    const [timeDiff, setTimeDiff] = useState<any>();
    const [deadTime, setDeadTime] = useState<any>();
    const [totalTime, setTotalTime] = useState<any>();

    const [fromEnd, setFromEnd] = useState<any>();

    const toggleNeedDate = () => {
        let notNeedDate = !needDate;
        setNeedDate(notNeedDate);

        setStartTime(timeFormat(startTime, notNeedDate));
        setEndTime(timeFormat(endTime, notNeedDate));
    }

    let setPercentHandle = (state:any, value:any) => {
        state(parseInt(value));
    }

    

    const decimanHours = (time: any) => {
        var n = new Date(0,0);
        n.setSeconds(+time * 60 * 60);
        let hours = n.toTimeString().slice(0, 5);


        return hours;
    }





    let calc = () =>{
        let _startTime =  getTime(startTime, needDate);
        let _endTime = getTime(endTime, needDate);
        
        if(_startTime && _endTime) {

        
            let _percentDiff = (startPercent - endPercent);
            let _timeDiff = _endTime.diff(_startTime, 'minutes')/60;
            let percentPerHour = _percentDiff/(_timeDiff);
            let _hoursRemain = endPercent / percentPerHour;
            let _deadTime = _endTime.add(_hoursRemain, 'hours');
            let _totalTime = _timeDiff + _hoursRemain;
            
            let _fromEnd;

            if(_deadTime > _endTime) {
                _fromEnd = _deadTime.from(_endTime, true);
            } else {
                _fromEnd = _deadTime.add(1, 'day').from(_endTime, true);
            }

            return [decimanHours(_totalTime), decimanHours(_timeDiff), _deadTime, _fromEnd];
        }
        return [];
    }

    let init = () => {
        setStartPercent(97);
        setEndPercent(70);
        // setEndPercent(41);
        setNeedDate(false);
        // setStartTime(timeFormat("08:42"));
        // setEndTime(timeFormat("19:35"));
   }

    const dateType = (need: boolean) => {
        if(need) {
            return "datetime-local";
        }
        return "time";
    }

    useEffect(() => {
        init();
    },[]);

    useEffect(() => {
        if(startPercent && startTime && endPercent && endTime) {
            let [_totalTime, _timeDiff,  _deadTime, _fromEnd] = calc();
            setTotalTime(_totalTime);
            setTimeDiff(_timeDiff);
            setDeadTime(timeFormat(_deadTime, needDate));
            setFromEnd(_fromEnd);
        }

    }, [startPercent, endPercent, startTime, endTime]);

// @refresh reset

    return (
        <div>
            Need Date? <input type="checkbox" checked={needDate} onChange={toggleNeedDate}/><br/>
            Percentages:
            <br/>

            <input type="number" min={0} max={100} value={startPercent} onChange={(e)=>setPercentHandle(setStartPercent, e.target.value)}/>%
            <br/>
            <input type="number" min={0} max={100} value={endPercent} onChange={(e)=>setPercentHandle(setEndPercent,e.target.value)}/>%

            <br />
            Times:
            <br/>
            <input type={dateType(needDate)} value={startTime} onChange={(e)=>setStartTime(timeFormat(e.target.value, needDate))}/>
            <br/>
            <input type={dateType(needDate)} value={endTime} onChange={(e)=>setEndTime(timeFormat(e.target.value, needDate))}/>
            <br/>
            <br/>
            {startPercent-endPercent}% in {timeDiff}
            <div>
                <h4>ESTIMATES</h4>
                Total: {totalTime} <br/>
                Remaining: {fromEnd} <br/>
                Dead Time <input disabled={true} type={dateType(needDate)} defaultValue={deadTime} /> <br/>
            </div>
           
        </div>
    )
};

export default Battery;
