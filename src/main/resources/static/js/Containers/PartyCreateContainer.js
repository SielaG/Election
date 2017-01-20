var PartyCreateContainer = React.createClass({
  getInitialState: function() {
    return {
      name : '',
    };
  },
  onHandleNameChange : function(event){
  this.setState({name : event.target.value});
},
  onHandleSubmit : function(event){
    var self = this;
    event.preventDefault();
    var partyName = {name: this.state.name};
    axios
      .post('/party', partyName)
      .then(function(response){
        console.log(response);
        self.context.router.push('/party');
      })
      .catch(function(err){
        console.error('PartyCreateContainer.onHandleSubmit.axios', err);
      });
  },
  render: function() {
    return (
      <PartyCreateEditFormComponent
       onHandleNameChange={this.onHandleNameChange}
       name={this.state.name}
       onHandleSubmit={this.onHandleSubmit}

       action='Sukurti'
       />
    );
  }
});
PartyCreateContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
window.PartyCreateContainer = PartyCreateContainer ;