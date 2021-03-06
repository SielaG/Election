var styles = {
  toggle :
  function(number){
    if (number == 0) {
      return {display : 'inherit'};
    } else {
      return {display : 'none'};
    }
  },
  toggleTF :
  function(bln){
    if (bln) {
      return {display : 'inherit'};
    } else {
      return {display : 'none'};
    }
  },
  toggleGreen :
  function(bool){
    if (bool) {
      return {background : '#dff0d8'};
    } else {
      return {background : 'none'};
    }
  },
  toggleResultNav :
  function(bool){
    if (bool != undefined) {
      return {display : 'inherit'};
    } else {
      return {display : 'none'};
    }
  },
  toggleTableStyle :
  function(list){
    if (list == undefined ){
      return {display : 'none'}
    } else if( list.length != 0 ) {
      return {display : 'inherit'};
    } else {
      return {display : 'none'};
    }
  },
  partyListStyle :
  function(candNumber,winnersCount){
    if (winnersCount) {
      if (candNumber<=winnersCount) {
        return {backgroundColor : 'rgb(226, 255, 214)'};
      } else {
        return {};
      }
    }
    return {};
  },

};

window.styles = styles;
