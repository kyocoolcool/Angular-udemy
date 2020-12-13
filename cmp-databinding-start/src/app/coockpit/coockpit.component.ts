import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-coockpit',
  templateUrl: './coockpit.component.html',
  styles: []
})
export class CoockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContainInput') serverContainInput: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContainInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput) {
    this.bluePrintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContainInput.nativeElement.value});
  }

}
