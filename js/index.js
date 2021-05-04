
tinymce.init({
    selector: '#detalle-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  

  const reos = [];
  const cargarTabla = ()=>{

    let tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML="";
    for(let i=0; i < reos.length; ++i){

      let r = reos[i];
      let tr = document.createElement("tr");
      let tdNombre = document.createElement("td");
      let tdDetalles = document.createElement("td");
      let tdCiudad = document.createElement("td");
      let tdCrimenes = document.createElement("td");
      tdNombre.innerText = r.nombre + " " + r.apellido;
      tdDetalles.innerHTML = r.detalle;

      if (r.ciudad=="1"){
        tdCiudad.innerText = "Viña del Mar"
      }else if (r.ciudad=="2"){
        tdCiudad.innerText = "Quilpue"
      }else if (r.ciudad=="3"){
        tdCiudad.innerText = "Santiago"
      }else {
        tdCiudad.innerText = "Otra ciudad"
      }
       
      let gravedad = document.querySelector("#cantidadcrimenes-number")
      if ((r.crimenes>=0) & (r.crimenes<=3)){
        gravedad="leve"
      }else if ((r.crimenes>=4) & (r.crimenes<=6)){
        gravedad="grave"
      }else if ((r.crimenes>=7) & (r.crimenes<=15)){
        gravedad="peligroso"
      }else {
        gravedad="enemigo social"
      }

      let crimenes = document.createElement("i");
      if (gravedad=="leve"){
        crimenes.classList.add("fas","fa-exclamation-triangle","text-secondary", "fa-2x");
      }else if (gravedad=="grave"){
        crimenes.classList.add("fas","fa-exclamation-triangle","text-dark", "fa-2x");
      }else if (gravedad=="peligroso"){
        crimenes.classList.add("fas","fa-exclamation-triangle","text-warning", "fa-2x");
      }else if (gravedad=="enemigo social"){
        crimenes.classList.add("fas","fa-exclamation-triangle","text-danger", "fa-2x",);
      }

      tdCrimenes.classList.add("text-center");
      tdCrimenes.appendChild(crimenes);
      tr.appendChild(tdNombre);
      tr.appendChild(tdDetalles);
      tr.appendChild(tdCiudad);
      tr.appendChild(tdCrimenes);
      tbody.appendChild(tr);
    }
  }

  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let crimenes = document.querySelector("#cantidadcrimenes-number").value;
    let detalle = tinymce.get("detalle-txt").getContent();
    let ciudad = document.querySelector("#ciudad-select").value;
    let reo={};
    reo.nombre = nombre
    reo.apellido = apellido
    reo.crimenes = crimenes
    reo.detalle = detalle
    reo.ciudad = ciudad
    console.log(reos);
    reos.push(reo);
    cargarTabla();
    Swal.fire("Registro de criminal realizado");
  } );


