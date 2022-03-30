import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTasklengthchecker]'
})
export class TasklengthcheckerDirective implements OnChanges {


  constructor(private el: ElementRef) {

    console.log(el.nativeElement.value);

  }


  // Listen for keyup event and change background color

  @HostListener("window:keyup") ngOnChanges() {


    let count = this.el.nativeElement.value.length

    console.log(this.el.nativeElement.value.length);

    if(count < 5) {

        this.el.nativeElement.style.backgroundColor = 'red';
        //alert("La tarea tiene pocos caracteres"); // se puede acomodar con otro evento para que no se corte tanto el flujo

    } else if(count >= 5 && count <= 10) {

        this.el.nativeElement.style.backgroundColor = 'green'

    } else if(count > 10) {

        this.el.nativeElement.style.backgroundColor = 'purple'

    }


  }
}
