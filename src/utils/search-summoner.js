const retrieveSummoner = async (summonerName) => {
    try {
        const response = await fetch(`https://league-of-legends-mobile-stats.herokuapp.com/api/getUser/${summonerName}`);
        const data = await response.json();
  
        if(data.status !== undefined){
          return {
             message: data.status.message, 
             result: false,
             loading: false,
          }
        } else {
          return {
            ...data, 
            message: '',
            result: true,
            loading: false,
          }
        }
    
      } catch (error) {
        return {
          message: 'Backend error',
          result: false,
          loading: false,
        }
      }
}

export default retrieveSummoner;
