

export const UrlInfo = (props) => {

    return(<div>
        
            <p>Start: {props.time.startRequest.toDateString()+" "+props.time.startRequest.getHours()+":"+
                    props.time.startRequest.getMinutes()+":"+
                    props.time.startRequest.getSeconds()}</p>

            <p>End: {props.time.endRequest.toDateString()+" "+props.time.endRequest.getHours()+":"+
                    props.time.endRequest.getMinutes()+":"+
                    props.time.endRequest.getSeconds()}</p>

            <p>Start Save: {props.time.startSave.toDateString()+" "+props.time.startSave.getHours()+":"+
                    props.time.startSave.getMinutes()+":"+
                    props.time.startSave.getSeconds()}</p>
            
            <p>End Save: {props.time.endSave.toDateString()+" "+props.time.endSave.getHours()+":"+
                    props.time.endSave.getMinutes()+":"+
                    props.time.endSave.getSeconds()}</p>

            <br />
            <br />
    </div>)

}

export default UrlInfo;






