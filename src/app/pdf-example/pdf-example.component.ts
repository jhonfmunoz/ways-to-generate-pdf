import { Component } from '@angular/core';
import * as pdf from 'jspdf';
import autotable from 'jspdf-autotable';

@Component({
  selector: 'app-pdf-example',
  templateUrl: './pdf-example.component.html',
  styleUrls: ['./pdf-example.component.scss']
})
export class PdfExampleComponent {

  downloadOnePDF(): void {
    // Creamos una nueva instancia de jsPDF
    const doc = new pdf.jsPDF();

    // Agregamos el encabezado
    doc.setFontSize(18);
    doc.text('Ejemplo de PDF', 10, 10);

    // Agregamos los párrafos en columnas
    const column1 = 10;
    const column2 = 80;
    const column3 = 150;
    const y = 30;
    const lineHeight = 7;
    doc.setFontSize(12);
    doc.text(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed id fermentum elit.`, column1, y);
    doc.text(`Suspendisse suscipit neque velit, vel tristique arcu 
              convallis eget.`, column2, y);
    doc.text(`Vestibulum ullamcorper lectus vel tortor euismod dapibus.`,
      column3, y);

    const y2 = y + lineHeight;
    doc.text(`Vivamus eu imperdiet libero, at accumsan sapien. 
              Nullam varius arcu vel nulla luctus.`, column1, y2);
    doc.text(`Mauris venenatis, sapien vel fermentum consectetur, 
              quam eros bibendum nisi, ac pulvinar ex nibh nec sapien.`, 
              column2, y2);
    doc.text(`Aliquam a pulvinar libero. Donec ornare, sapien 
              vitae pellentesque varius, enim libero blandit ipsum, 
              sit amet rutrum nisl magna nec nulla.`, column3, y2);

    const y3 = y2 + lineHeight;
    doc.text(`Pellentesque bibendum tellus in enim feugiat 
              ullamcorper. Donec euismod lacus eu nulla interdum commodo.`, 
              column1, y3);
    doc.text(`Donec ut nibh ac augue facilisis posuere. 
              Nulla volutpat commodo ante, eget hendrerit odio vehicula quis.`, 
              column2, y3);
    doc.text(`Ut ornare libero vel purus mollis venenatis.`, column3, y3);

    // Agregamos la tabla
    const headers = [['Nombre', 'Apellido', 'Edad']];
    const data = [
      ['Juan', 'Pérez', '30'],
      ['María', 'González', '25'],
      ['Pedro', 'Sánchez', '35'],
      ['Laura', 'López', '28'],
      ['Miguel', 'Martínez', '40'],
    ];
   // const tableHeight = autotable.previous.finalY + 10;
  
    autotable(doc, {
      head: headers,
      body: data,
      
    })
    // Descargamos el PDF
    doc.save('ejemplo.pdf');
  }

  //generatePDF() {
  //  const doc = new pdf.jsPDF();
  //  const headers = [['Nombre', 'Apellido', 'Edad']];
  //  const data = [
  //    ['Juan', 'Pérez', '30'],
  //    ['María', 'García', '25'],
  //    ['Pedro', 'Sánchez', '40']
  //  ];
  //  doc.autoTable({
  //    head: headers,
  //    body: data,
  //    startY: 20,
  //    styles: {
  //      cellPadding: 5,
  //      fontSize: 12,
  //      valign: 'middle',
  //      halign: 'center'
  //    },
  //    columnStyles: {
  //      0: {halign: 'left'},
  //      1: {halign: 'center'},
  //      2: {halign: 'right'}
  //    }
  //  });
  //  doc.save('mi_archivo.pdf');
  //}

  downloadPDF(): void {
    // Creamos una nueva instancia de jsPDF
    const doc = new pdf.jsPDF();

    // Agregamos el encabezado
    doc.setFontSize(16);
    doc.text('Reporte de ejemplo', 20, 20);

    // Agregamos dos columnas con párrafos
    const col1 = 20;
    const col2 = 90;
    const row = 40;
    const gap = 10;
    doc.setFontSize(12);
    doc.text('Columna 1', col1, row);
    doc.text('Columna 2', col2, row);
    doc.setLineWidth(0.5);
    doc.line(col1, row + 2, col2 + 70, row + 2);
    doc.setFontSize(10);
    doc.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat vel nibh viverra tincidunt. Nam condimentum semper lacus, at tristique justo malesuada sit amet. Aenean eget semper ipsum. Nullam et elit dignissim, tincidunt felis non, commodo odio. Nulla quis commodo nisi. Fusce blandit bibendum magna, eget sagittis leo tempor in. Ut ut enim quis turpis tempor commodo. Donec lobortis purus quis urna dignissim, non tempor ipsum tincidunt. Nunc congue ligula eu orci elementum efficitur. Nulla facilisi. Aliquam ornare nisl non tincidunt eleifend.', col1, row + gap);
    doc.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat vel nibh viverra tincidunt. Nam condimentum semper lacus, at tristique justo malesuada sit amet. Aenean eget semper ipsum. Nullam et elit dignissim, tincidunt felis non, commodo odio. Nulla quis commodo nisi. Fusce blandit bibendum magna, eget sagittis leo tempor in. Ut ut enim quis turpis tempor commodo. Donec lobortis purus quis urna dignissim, non tempor ipsum tincidunt. Nunc congue ligula eu orci elementum efficitur. Nulla facilisi. Aliquam ornare nisl non tincidunt eleifend.', col2, row + gap);

    // Agregamos una tabla
    const header = [['Nombre', 'Apellido', 'Edad']];
    const data = [
      ['Juan', 'Pérez', '30'],
      ['María', 'Gómez', '25'],
      ['Pedro', 'Martínez', '40'],
      ['Luisa', 'González', '35']
    ];
    const tableHeight = (data.length + 1) * 10;
    autotable(doc, {
      head: header,
      body: data,
      startY: row + gap * 2 + 60,
      margin: { top: 10 },
      tableWidth: 'auto',
      styles: { overflow: 'linebreak' },
    });

    doc.save('ejemplo.pdf');
  }

}
