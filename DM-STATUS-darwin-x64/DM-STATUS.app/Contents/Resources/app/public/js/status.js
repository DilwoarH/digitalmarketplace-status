class Status
{
    constructor()
    {
        this.runAllStatusChecks();
        this.api_status             = false;
        this.search_api_status      = false;
        this.app_status             = false;
        this.error_msg              = false;
    }

    runAllStatusChecks()
    {
        var _this = this;

        this.request( `http://127.0.0.1/_status` )
        .then(function(res){

            _this.translateResponseAndUpdateUI( res );
        })
        .catch(function(res, status, error){
            res = res.responseJSON;
            _this.translateResponseAndUpdateUI( res );
        });
    }

    request( url )
    {
        return $.getJSON(url);
    }

    translateResponseAndUpdateUI( res )
    {
        this.api_status        = res.api_status.status;
        this.search_api_status = res.search_api_status.status;
        this.app_status        = res.status;
        this.error_msg         = res.message;
        this.updateUI();
    }

    updateUI()
    {
        this.setStatus( $('#api-status'), this.api_status );
        this.setStatus( $('#search-api-status'), this.search_api_status );
        this.setStatus( $('#front-end-status'), this.app_status );
        
        $('#error-msg').html( this.error_msg || "ok" );
    }

    setStatus( scope, status )
    {
        if ( status === "ok" )
        {
            scope.find('.led-box').html(`<div class="led-green"></div>`);
        }
        else
        {
            scope.find('.led-box').html(`<div class="led-red"></div>`);
        }
    }
}