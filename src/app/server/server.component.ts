import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponenet {
    serverId = "192.168.15.100";
    serverStatus = 'offline';
    getServerStatus() {
        return this.serverStatus;

    }

}