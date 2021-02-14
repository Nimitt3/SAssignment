import {TimeStamp} from './TimeStamp'


export const UrlInfo = (props) => {

    return(<div>
        
            <TimeStamp time={props.time.startRequest} type="Start" />
            <TimeStamp time={props.time.endRequest} type="End" />
            <TimeStamp time={props.time.startSave} type="Start Save" />
            <TimeStamp time={props.time.endSave} type="End Save" />    
            
            <br />
            <br />
    </div>)

}

export default UrlInfo;






