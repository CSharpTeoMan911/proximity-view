let credentialPaneGeometryInterval = null;

function credentialPaneGeometry(){
    const main_div = document.getElementById("main_div");
    const credential_pane = document.getElementById("credentials-table");

    if(main_div !== null && main_div !== undefined){

        if(credential_pane !== null && credential_pane !== undefined){
            const width = main_div.offsetWidth;
            const height = main_div.offsetHeight ;
            
            if(window.innerWidth <= 450 || window.innerWidth == credential_pane.innerWidth){
                credential_pane.style.width = "92%";
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
    }
    credentialPaneGeometryInterval = setInterval(credentialPaneGeometry, 10);
}