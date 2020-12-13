import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  btnName = 'click me';
  btnStatus = false;
  serverStatus = 'server closed';
  serverLook = false;
  serverName = 'testServer';
  servers = ['testServer', 'testServer2'];
  times = [];
  constructor() {
    setTimeout(() => this.btnStatus = true, 3000);
  }

  ngOnInit(): void {
  }


  onClickBtn() {
    this.serverStatus = 'server started ' + this.serverName;
    this.serverLook = true;
    this.servers.push(this.serverName);
  }

  changeText(event) {
  this.serverName = event.target.value;
  }

  add() {
    this.times.push(new Date());
  }
}
