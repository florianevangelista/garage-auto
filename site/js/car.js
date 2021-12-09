var key = config.SECRET_API_KEY;

const getUsers = () => {
    axios.get('https://api.airtable.com/v0/app98z1ApOfIDLukv/Table%201?api_key='+key)
    .then(response => {
         response.data.records.forEach(car => {

                let url = car.fields.Attachments[0].url;
                let modele = car.fields.Marque_modèle;
                let annee = car.fields.Année;
                let transmision = car.fields.Transmition;
                let KM = car.fields.KM;
                let prix = car.fields.Prix;
                let autoscout = car.fields.Autoscout;

                document.getElementById('car').innerHTML += `<div class="col-lg-4 col-sm-6 col-6">
                <div class="ltn__product-item ltn__product-item-3 text-center">
                    <a href="`+autoscout+`" target="_blank">
                        <div class="product-img">
                            <img src="`+url+`" alt="#">
                        </div>
                    </a>
                    <div class="product-info">
                        <h2 class="product-title"><a href="product-details.html">`+modele+`</a></h2>
                        <div class="product-price">
                            <span>`+prix+` €</span>
                        </div>
                        <div class="product-info-brief">
                            <ul>
                                <li>
                                    <i class="fas fa-car"></i>`+annee+`
                                </li>
                                <li>
                                    <i class="fas fa-cog"></i>`+transmision+`
                                </li>
                                <li>
                                    <i class="fas fa-road"></i>`+KM+` KM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
        });
   })
    .catch(error => console.error(error));
   };
   getUsers();

   