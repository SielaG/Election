function getPartyMembersList(self) {
  var partyMembersList = [];
  self.props.partyDetails.members.map(function(member,index) {
    partyMembersList.push(
      <PartyDetailRowViewComponent
        id={member.id}
        key={index}
        name={member.name}
        surname={member.surname}
        birthDate={member.birthDate}
        description={member.description}
        numberInParty={member.numberInParty}
        countyName={member.countyName}
        listType='membersList'
      />
    );
  });
  return partyMembersList;
}
function getRatedPartyMembersList(self) {
  var mandatesPerParty= self.props.generalResults.mandatesPerPartyInMulti;
  var membersFOL = self.props.partyDetails.members;
  if (self.props.generalResults.votesInMulti != undefined) {
    var vip = self.props.generalResults.votesInMulti;
    var ratedMembersList =[];
    var mandatesCount = 0;
    vip.forEach(function(obj){
      var numberOld = 0;
      mandatesPerParty.forEach(function(p){
        if (self.props.pid == p.par.id) {
          mandatesCount = p.votes;
        }
      });
      if(obj.par.id == self.props.pid){
        obj.par.members.forEach(function(member,index) {
          if (membersFOL) {
            membersFOL.forEach(function(memberFOL){
              if (memberFOL.id == member.id) {
                numberOld = (memberFOL.numberInParty - member.numberInParty);
              }
            });
          }
          if (member.numberInParty == mandatesCount+1 && mandatesCount != 0) {
            ratedMembersList.push(<tr><td style={{textAlign : 'center'}} colSpan='4'>
                    <i className="fa fa-arrow-circle-o-up fa-fw text-success" aria-hidden="true"></i>Kandidatai gaunantys mandatus Seime
                    <i className="fa fa-arrow-circle-o-up fa-fw text-success" aria-hidden="true"></i>
                    </td></tr>);
          }
          ratedMembersList.push(
            <PartyDetailRowViewComponent
            mandatesCount={mandatesCount}
            id={member.id}
            key={index}
            name={member.name}
            surname={member.surname}
            birthDate={member.birthDate}
            description={member.description}
            numberInParty={member.numberInParty}
            countyName={member.countyName}
            listType='ratedList'
            delta={numberOld}
            />
            );
        });
      }
    });
    return ratedMembersList;
  }
}
function getSingleWinnersByPartyList(self) {
  if (self.props.generalResults.singleWinners != undefined) {
        var singleWinnersByPartyList =[];
      self.props.generalResults.singleWinners.forEach(function(obj){
        var singleWinners = [];
        if(obj.candidate.partijosId == self.props.pid){
          singleWinners.push(obj.candidate)
        singleWinners.forEach(function(member,index) {
            singleWinnersByPartyList.push(
              <PartyDetailRowViewComponent
              id={member.id}
              key={member.id+'2652652'}
              name={member.name}
              surname={member.surname}
              birthDate={member.birthDate}
              description={member.description}
              numberInParty={member.numberInParty}
              countyName={member.countyName}
              listType='singleWinnersList'
              />
            );
          });
        }
        });
    return singleWinnersByPartyList;
  }
}
function getpartyWinnersMembersList(self, numberOfWinners) {
  if (self.props.generalResults.votesInMulti != undefined) {
    var vip = self.props.generalResults.votesInMulti;
          var partyWinnersMembersList =[];
        vip.forEach(function(obj){
          if(obj.par.id == self.props.pid){
            var  partyMebersList = [];
            for(var i = 0; i < numberOfWinners; i++){
              partyMebersList.push(
                obj.par.members[i]
              );
            }
            partyMebersList.map(function(member,index) {
                partyWinnersMembersList.push(
                  <PartyDetailRowViewComponent
                  id={member.id}
                  key={index}
                  name={member.name}
                  surname={member.surname}
                  birthDate={member.birthDate}
                  description={member.description}
                  numberInParty={member.numberInParty}
                  countyName={member.countyName}
                  listType='multiWinnersList'
                  />
                );
            });
          }
        });
      return partyWinnersMembersList;
  }
}
function getMandatesPerParty(self) {
  if (self.props.generalResults.mandatesPerPartyInMulti != undefined) {
        var mandatesPerParty = null;
      self.props.generalResults.mandatesPerPartyInMulti.forEach(function(obj){
        if(obj.par.id == self.props.pid){
          mandatesPerParty = obj.votes;
        }
        });
    return mandatesPerParty;
  }
}

var PartyDetailComponent = React.createClass({
  render: function() {
    var mandatesPerParty = getMandatesPerParty(this);
    var partyMembersList = getPartyMembersList(this);
    var ratedMembersList = getRatedPartyMembersList(this);
    var partyWinnersMembersList = getpartyWinnersMembersList(this, mandatesPerParty);
    var singleWinnersByPartyList = getSingleWinnersByPartyList(this);
    var ratedPartyStyle = styles.toggleResultNav(this.props.generalResults.votesInMulti);
    var partyListStyle = styles.toggleResultNav(this.props.partyDetails.members);
    var partyWinnersStyle = styles.toggleTableStyle(partyWinnersMembersList);
    var singleWinnersStyle = styles.toggleTableStyle(singleWinnersByPartyList);
    var noWinnersStyle = styles.toggleTableStyle(singleWinnersByPartyList && partyWinnersStyle);
    return (
      <div>
        <div className="container">
          <h1 className='yellow'>Partija Nr: {this.props.partyDetails.partyNumber} - {this.props.partyDetails.name}  </h1>
        </div>
            {/* nav-pills  */}
            <ul  className="nav nav-pills secondmenu">
              <li className="active">
                <a  href="#1a" data-toggle="tab">Partijos narių sąrašas</a>
              </li>
              <li style={noWinnersStyle}>
                <a  href="#2a" data-toggle="tab">Partijos laimėtojų sąrašas</a>
              </li>
              <li style={ratedPartyStyle}>
                <a  href="#3a" data-toggle="tab">Sureitinguotas Partijos narių sąrašas</a>
              </li>
            </ul>
            <div id="exTab1" className="container shadow">
              <div className="tab-content clearfix">
                {/* Party members list tab-1 */}
                <div className="tab-pane active" id="1a">
                  <h3>Partijos narių sąrašas prieš rinkimus</h3>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className='col-md-1 col-sm-1'>Nr.</th>
                          <th className='col-md-5 col-sm-5'>Kandidatas</th>
                          <th className='col-md-2 col-sm-2'>Gimimo data</th>
                          <th className='col-md-4 col-sm-4'>Apygarda</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partyMembersList}
                      </tbody>
                    </table>
                </div>
                {/* General info tab-2 */}
                <div className="tab-pane" id="2a">
                    <div style={partyWinnersStyle}>
                        <h3>Laimėjusių narių sąrašas daugiamandatėje</h3>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className='col-md-1 col-sm-1'>Nr.</th>
                            <th className='col-md-5 col-sm-5'>Kandidatas</th>
                            <th className='col-md-2 col-sm-2'>Gimimo data</th>
                            <th className='col-md-4 col-sm-4'>Apygarda</th>
                          </tr>
                        </thead>
                        <tbody>
                              {partyWinnersMembersList}
                        </tbody>
                      </table>
                    </div>
                    <div style={singleWinnersStyle}>
                        <h3>Laimėjusių narių sąrašas vienmandatėje</h3>
                      <table className="table table-striped">
                          <thead>
                            <tr>
                              <th className='col-md-1 col-sm-1'>Nr.</th>
                              <th className='col-md-5 col-sm-5'>Kandidatas</th>
                              <th className='col-md-2 col-sm-2'>Gimimo data</th>
                              <th className='col-md-4 col-sm-4'>Apygarda</th>
                            </tr>
                          </thead>
                          <tbody>
                            {singleWinnersByPartyList}
                          </tbody>
                      </table>
                    </div>
                </div>

                {/* Single candidates list tab-3 */}
                <div className="tab-pane" id="3a">
                  <h3>Narių sąrašas pagal reitingų rezultatus</h3>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className='col-md-1 col-sm-1'>Nr.</th>
                          <th className='col-md-5 col-sm-5'>Kandidatas</th>
                          <th className='col-md-2 col-sm-2'>Gimimo data</th>
                          <th className='col-md-4 col-sm-4'>Apygarda</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ratedMembersList}
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
      </div>
    );
  },
});
window.PartyDetailComponent = PartyDetailComponent;
