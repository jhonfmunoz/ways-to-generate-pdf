import { Component, Input } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pdf-example-html2camvas',
  templateUrl: './pdf-example-html2camvas.component.html',
  styleUrls: ['./pdf-example-html2camvas.component.scss']
})
export class PdfExampleHtml2camvasComponent {

  //@Input('', {}) private view: HTMLElement;

  generatePDF() {
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

}
