let credentialPaneGeometryInterval = null;
let credentialPaneGradientFluctuationInterval = null;
let alertsPaneGeometryInterval = null;
let curr_offset = 50;
let switch_offset = false;


function alertsPaneGeometry(){
    const alerts_panel = document.getElementById("alerts-panel");
    const navbar = document.getElementById("navbar");
    const main_div = document.getElementById("main_div");

    if(alerts_panel !== null && alerts_panel !== undefined){
        alerts_panel.style.height = `${main_div.offsetHeight - navbar.offsetHeight}px`;
    }
}

export function setAlertsPaneGeometry(){
    if(alertsPaneGeometryInterval !== null){
        clearInterval(alertsPaneGeometryInterval);
    }
    alertsPaneGeometryInterval = setInterval(alertsPaneGeometry, 10);
}

function credentialPaneGradientFluctuation(){
    const credential_pane = document.getElementById("credentials-table");
    if(credential_pane !== null && credential_pane !== undefined){
        let gradient = `linear-gradient(90deg, rgba(167, 167, 167, 0.6) ${curr_offset}%, rgba(231, 231, 231, 0.6) ) ${100 - curr_offset}%`;
        credential_pane.style.background = gradient;
    
        if(switch_offset === false){
            if(curr_offset < 80){
                curr_offset++;
            }
            else{
                switch_offset = true;
            }
        }
        else{
            if(curr_offset > 50){
                curr_offset--;
            }
            else{
                switch_offset = false;
            }
        }
    }
}

export function setCredentialPaneOpacityFluctuation(){
    if(credentialPaneGradientFluctuationInterval !== undefined){
        clearInterval(credentialPaneGradientFluctuationInterval);
    }
    credentialPaneGradientFluctuationInterval = setInterval(credentialPaneGradientFluctuation, 100);
}


function credentialPaneGeometry(){
    const main_div = document.getElementById("main_div");
    const credential_pane = document.getElementById("credentials-table");

    if(main_div !== null && main_div !== undefined){

        if(credential_pane !== null && credential_pane !== undefined){
            const width = main_div.offsetWidth;
            const height = main_div.offsetHeight ;
            
            if(window.innerWidth <= 450 || window.innerWidth == credential_pane.innerWidth){
                credential_pane.style.width = "88%";
                main_div.style.border = "0px solid transparent";
            }
            else{
                credential_pane.style.width = 'fit-content';
                credential_pane.style.height = "fit-content";
            }
        }
    }
}

export function setCredentialPaneGeometry(){
    if(credentialPaneGeometryInterval !== null){
        clearInterval(credentialPaneGeometryInterval);
        curr_offset = 50;
        switch_offset = false;
    }
    credentialPaneGeometryInterval = setInterval(credentialPaneGeometry, 10);
}