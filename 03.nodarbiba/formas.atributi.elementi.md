# formas
HTML **form** elements tiek izmantots, lai izveidotu HTML veidlapu lietotāja ievadei: **form**...veidlapa jeb lapas saturs....**/form** Elements **form** ir konteiners dažāda veida ievades elementiem, piemēram: teksta laukiem, izvēles rūtiņām, radiopogām, iesniegšanas pogām utt  

# elementi
Elemeti parasti iekrāsoti `#EC960CC0` brūnā krāsā.
> 1. Elementu ***label*** izmanto lai paskaidrotu, ko jāievada teksta lauciņā, vai arī piešķir rādio pogām savu nozīmi.  
> 2. Elementu ***input*** var attēlot dažādos veidos atkarībā no *type* atribūta.
  >> ***input type="text"*** definē vienas rindiņas ievades lauku teksta ievadei.  
  >> ***input type="radio"*** definē radio pogu. Radiopogas ļauj lietotājam izvēlēties VIENU no ierobežota skaita iespēju.  
  >> ***input type="checkbox"*** definē rūtiņu. Izvēles rūtiņas ļauj lietotājam atlasīt NULLI vai VAIRĀK opciju no ierobežota skaita iespēju.  
  >> ***input type="submit"*** definē pogu veidlapas datu iesniegšanai veidlapas apstrādātājam. Veidlapu apstrādātājs parasti ir fails serverī ar skriptu ievades datu apstrādei. Veidlapas apdarinātājs ir norādīts veidlapas *action* atribūtā.  

Visus ***input*** veidus var atrast (https://www.w3schools.com/html/html_form_input_types.asp)  

> 3. Elements ***select*** definē nolaižamo sarakstu.  
> 4. Elements ***option*** nosaka opciju, kuru var atlasīt. Pēc noklusējuma ir atlasīts pirmais vienums nolaižamajā sarakstā.  
> 5. Elements ***textarea*** definē vairāku rindu ievades lauku (teksta apgabalu).  


# atribūti
Atribūtus parasti iekrāso `#EC0C0C` sarkanā krāsā.  
**form** atribūti var būt:
> 1. Atribūts *action* (darbības atribūts) nosaka darbību, kas jāveic, iesniedzot veidlapu. Parasti veidlapas dati tiek nosūtīti uz failu serverī, kad lietotājs noklikšķina uz pogas Iesniegt. Tālāk esošajā piemērā veidlapas dati tiek nosūtīti uz failu ar nosaukumu "action_page.php". Šajā failā ir servera puses skripts, kas apstrādā veidlapas datus.  
> 2. Atribūts *target* (mērķa atribūts) norāda, kur parādīt atbildi, kas saņemta pēc veidlapas iesniegšanas. Atribūtam targetvar būt viena no šīm vērtībām.  
  >> target_blank - lapa atvērsies jaunā cilnē.  
  >> target_self - lapa atvērsis jau esošajā cilnē.  
> 3. Atribūts *autocomplete* norāda, vai veidlapai ir jābūt ieslēgtai vai izslēgtai automātiskajai pabeigšanai. Kad automātiskā pabeigšana ir ieslēgta, pārlūkprogramma automātiski aizpilda vērtības, pamatojoties uz vērtībām, kuras lietotājs ir ievadījis iepriekš.  
> 4. Atribūts *novalidate* norāda ka apstiprinājums (parole?) nav vajadzīgs.  
> 5. Lai definētu iepriekš atlasītu opciju, pievienojiet ***option*** *selected* atribūtu.
> 6. Atribūts *multiple* atļau izvēlēties vairākas atbildes.
> 7. Atribūts *rows* norāda redzamo rindu skaitu teksta apgabalā.  
> 8. Atribūts *cols* norāda teksta apgabala redzamo platumu.


