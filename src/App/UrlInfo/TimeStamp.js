

export const TimeStamp = (props) => {

    console.log(props)
    return(<p>
        {props.type+": "+props.time.toDateString()+" "+props.time.getHours()+":"+
                    props.time.getMinutes()+":"+
                    props.time.getSeconds()}
        </p>    
   )

}

export default TimeStamp;
