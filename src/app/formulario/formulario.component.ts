import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  formularioEnviado: boolean;
  fecha: Date;

  constructor(private postService: PostService) {
    this.fecha = new Date();
    this.formularioEnviado = false;
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    this.formularioEnviado = true;
    this.postService.agregarPost(this.formulario.value);
    this.formulario.reset();
  }

}
