import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import { DOCUMENT } from '@angular/common';



/** pdfmake */
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generatePDF';
  @ViewChild('contentPDF',{static: true}) content: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  generatePDFHtml2Canvas() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('filename.pdf'); // Generated PDF
    });
  }

  generatePDFHtml2Canvas1() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const pdf = new jspdf.jsPDF('p', 'pt', [canvas.width, canvas.height]);
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
      pdf.save('filename.pdf'); // Generated PDF
    });
  }

  generatePDFHtml() {
    const doc = new jsPDF();
    const conten: HTMLElement = this.content.nativeElement;
    console.log('this.document.body', conten.outerHTML);
    const miContenido = '<h1>Mi contenido</h1>';
    doc.html(conten, {
      callback: () => {
        doc.save('html_pdf.pdf');
      }
    });
  }

/**
 * MEjor meotodo para generar pdfs
 */
  generatehtml2pdf() {
    const options = {
      filename: 'archivo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      //margin: { top: 0.5, right: 0.5, bottom: 0.5, left: 0.5 },
      enableLinks: true,
      enableStyles: true,
      useCORS: true
    };
  
    //const content = document.getElementById('contentToConvert');
    //const content: HTMLElement = this.content.nativeElement; 
    const content = document.getElementById('contentToConvert');

    html2pdf()
      .from(content)
      .set(options)
      .save();
  }


  generatePDFmake() {
    // Obtener el contenido HTML que se agregará al archivo PDF
    const content: HTMLElement = document.getElementById('contentToConvert');
  
    // Convertir el contenido HTML en un objeto de pdfmake
    const docDefinition = { content: [{ text: content.outerHTML, style: 'body' }] };
    const docDefinition1 = {
      content: [
        'This paragraph fills full width, as there are no columns. Next paragraph however consists of three columns',
        {
          columns: [
            {
              // auto-sized columns have their widths based on their content
              width: 'auto',
              text: 'First column'
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              width: '*',
              text: 'Second column'
            },
            {
              // fixed width
              width: 100,
              text: 'Third column'
            },
            {
              // % width
              width: '20%',
              text: 'Fourth column'
            }
          ],
          // optional space between columns
          columnGap: 10
        },
        'This paragraph goes below all columns and has full width'
      ]
    };
    var docDefinition2 = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'First', 'Second', 'Third', 'The last one' ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
    };
    
    const styles = {
      body: { fontSize: 14 }
    };
  
    // Generar el archivo PDF utilizando pdfmake
    pdfMake.createPdf({ ...docDefinition2, styles }).download('archivo.pdf');
  }


}
