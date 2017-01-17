var CountyCreateEditFormComponent = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <div className="form-heading">
            <h2> Registruoti/naujinti apylinkės atstovą </h2>
          </div>
          <div className="form-group">
              <label for="cntName">Apygardos pavadinimas:</label>
              <input type="text" className="form-control" id="cntName"/>
          </div>
          <div className="form-group">
                <label>Apygardai priklausančių apylinkių sąrašas:</label>
                <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Apylinkių sąrašas</button>
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Pažymėkite apygardai priklausančias apylinkes</h4>
                      </div>
                      <div className="modal-body">
                        <CountyCreateFormCheckBoxDistrictNameComponent/>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="form-group">
            <a className="btn btn-success btn-sm" href="#" role="button">Registruoti</a>
            <a className="btn btn-warning btn-sm" href="#/county" role="button">Atšaukti</a>
          </div>
        </form>
      </div>
    );
  }

});

window.CountyCreateEditFormComponent = CountyCreateEditFormComponent;