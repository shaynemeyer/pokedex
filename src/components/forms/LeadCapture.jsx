var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({
    mixins: [Reflux.ListenTo(EmailStore, 'onChange')],
    getInitialState: function(){
      return {submitted: false};  
    },
    onSubmit: function(e){
        if (!this.refs.fieldEmail.state.valid) {
        alert("Email is required");
        } else {
        var httpRequestBody = {
            email: this.refs.fieldName.state.value,
            firstName: this.refs.fieldName.state.value
        };
        alert(httpRequestBody);

        this.refs.fieldName.clear();
        this.refs.fieldEmail.clear();
        }
        
        Actions.submitEmail(subscriber);
    },
    onChange: function(msg){
        console.log(msg);
        this.setState({submitted: true});
        
        
    },
    render: function() {
        
        var successStyle = {
            color: "green",
            visibility: this.state.submitted ? "visible" : "hidden"
        };
        
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Get Free E-book</h4>
                    </div>
                    <div className="panel-body">
                        <NameField type="first" ref="fieldName" />
                        <EmailField ref="fieldEmail" />
                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        </div>
                        <div className="col-sm-2">
                        <h5 style={successStyle}>Success!</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
