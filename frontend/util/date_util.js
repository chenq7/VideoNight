export default (created_at) => {

  const videoDate = new Date(created_at).getTime();
  const currDate = Date.now();

  let months = parseInt((currDate - videoDate).toString()) / 1000 / 3600 / 24 / 30

  if (months > 12){
    const years = (Math.floor(months / 12));
    return (years > 1 ? (years + ' years ago') : (years + ' year ago'));
  }
  else if (months < 1) {
    const days = Math.floor(months * 30);
    if (days > 7) {
      const weeks = Math.floor(days / 7)
      return (weeks > 1 ? (weeks + ' weeks ago') : (weeks + ' week ago'));
    } 
    else {
      if (days > 1){
        return days + ' days ago';
      } 
      else {
        return (days === 1 ? 'Yesterday' : 'Today');        
      }
    }
  } 
  else {
    months = Math.floor(months);
    return (months > 1 ? (months + ' months ago') : (months + ' month ago'));
  } 
}

