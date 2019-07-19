import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css']
})
export class LoaderComponent {
  @ViewChild('loader', {static: true}) private loader: ElementRef;

  constructor(private renderer: Renderer2) {}

  hide() {
    this.renderer.setStyle(this.loader.nativeElement, 'display', 'none');
  }
}
