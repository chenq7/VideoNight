export default (created_at) => {

  const videoDate = new Date(created_at).getTime();
  const currDate = Date.now();

  let months = parseInt((currDate - videoDate).toString()) / 1000 / 3600 / 24 / 30

  if (months > 12){
    const years = (Math.floor(months / 12));
    return (years > 1 ? (years + ' years ago') : (years + ' year ago'));
  }
  else if (months >= 1){
    months = Math.floor(months);
    return (months > 1 ? (months + ' months ago') : (months + ' month ago'));
  } 
  else {
    const days = months * 30;
    if (days > 7) {
      const weeks = Math.floor(days / 7)
      return (weeks > 1 ? (weeks + ' weeks ago') : (weeks + ' week ago'));
    }
    else {
      if (days >= 1) {
        days = Math.floor(days);
        return (days > 1 ? (days + ' days ago') : (days + ' day ago'));
      }
      else {
        let hours = days * 24;
        if (hours >= 1){
          hours = Math.floor(hours);
          return (hours > 1 ? (hours + ' hours ago') : (hours + ' hour ago'));
        }
        else {
          let minutes = hours * 60;
          if (minutes >= 1){
            minutes = Math.floor(minutes);
            return (minutes > 1 ? (minutes + ' minutes ago') : (minutes + ' minute ago'));
          }
          else {
            let seconds = Math.floor(minutes * 60);
            return (seconds > 1 ? (seconds + ' seconds ago') : (seconds + ' second ago'));
          }
        }
      }
    }
  } 
}

