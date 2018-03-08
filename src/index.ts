import { demodata } from './AutoSpToDsc/data/demodata';
import { AutoSpToDsc } from './AutoSpToDsc/AutoSpToDsc';
import 'babel-polyfill';

let inputTextArea: HTMLTextAreaElement = document.getElementById('autospinstaller') as HTMLTextAreaElement;
inputTextArea.value = demodata;
let inputScrollHeight: number = inputTextArea.scrollHeight + 2; // +2 to avoid vertical scroll bars
inputTextArea.style.height = inputScrollHeight + 'px';

let convertButton: HTMLButtonElement = document.getElementById('convert') as HTMLButtonElement;

convertButton.onclick = (e) => {
    inputTextArea = document.getElementById('autospinstaller') as HTMLTextAreaElement;
    let dsc: AutoSpToDsc = new AutoSpToDsc(inputTextArea.value);

    let outputTextArea: HTMLTextAreaElement = document.getElementById('sharepointdsc') as HTMLTextAreaElement;
    outputTextArea.value = dsc.toString();

    let outputScrollHeight: number = outputTextArea.scrollHeight + 2; // +2 to avoid vertical scroll bars
    outputTextArea.style.height = outputScrollHeight + 'px';
};
