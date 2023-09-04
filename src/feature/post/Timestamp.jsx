import {parseISO, formatDistanceToNow} from "date-fns";


const Timestamp = ({timestamp}) => {;
    let timeAgo = "";
    if(timestamp){
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }
  return (
    <span title={timestamp} className="text-gray-500 text-[14px]">
        &nbsp; - <i>{timeAgo}</i>
    </span>
  )
}

export default Timestamp;