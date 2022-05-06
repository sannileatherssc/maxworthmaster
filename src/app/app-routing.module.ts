import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AirradioComponent } from './Components/airradio/airradio.component';
import { AviationprinterComponent } from './Components/aviationprinter/aviationprinter.component';
import { AviationprinterproductComponent } from './Components/aviationprinterproduct/aviationprinterproduct.component';
import { AviationprinterproducttypeComponent } from './Components/aviationprinterproducttype/aviationprinterproducttype.component';
import { AviationsectorComponent } from './Components/aviationsector/aviationsector.component';
import { BarcodeprinterproductComponent } from './Components/barcodeprinterproduct/barcodeprinterproduct.component';
import { BarcodeprinterproducttypeComponent } from './Components/barcodeprinterproducttype/barcodeprinterproducttype.component';
import { BarcodescannerComponent } from './Components/barcodescanner/barcodescanner.component';
import { CareerComponent } from './Components/career/career.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ClientlistComponent } from './Components/clientlist/clientlist.component';
import { ConnectComponent } from './Components/connect/connect.component';
import { DocumentreaderComponent } from './Components/documentreader/documentreader.component';
import { DocumentreaderproductComponent } from './Components/documentreaderproduct/documentreaderproduct.component';
import { DocumentreaderproducttypeComponent } from './Components/documentreaderproducttype/documentreaderproducttype.component';
import { EgovernancesectorComponent } from './Components/egovernancesector/egovernancesector.component';
import { FormsComponent } from './Components/forms/forms.component';
import { FriendlymobilesectorComponent } from './Components/friendlymobilesector/friendlymobilesector.component';
import { HealthcaresectorComponent } from './Components/healthcaresector/healthcaresector.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HospitalitysectorComponent } from './Components/hospitalitysector/hospitalitysector.component';
import { LeadershipComponent } from './Components/leadership/leadership.component';
import { ManufacturingsectorComponent } from './Components/manufacturingsector/manufacturingsector.component';
import { MobilecomputersComponent } from './Components/mobilecomputers/mobilecomputers.component';
import { MobilecomputersproductComponent } from './Components/mobilecomputersproduct/mobilecomputersproduct.component';
import { MobilecomputersproducttypeComponent } from './Components/mobilecomputersproducttype/mobilecomputersproducttype.component';
import { PartnerlistComponent } from './Components/partnerlist/partnerlist.component';
import { PrintersComponent } from './Components/printers/printers.component';
import { PrintersproductComponent } from './Components/printersproduct/printersproduct.component';
import { PrivacypolicyComponent } from './Components/privacypolicy/privacypolicy.component';
import { ProductpageComponent } from './Components/productpage/productpage.component';
import { RetailsectorComponent } from './Components/retailsector/retailsector.component';
import { RfidComponent } from './Components/rfid/rfid.component';
import { ServicesComponent } from './Components/services/services.component';
import { SolutionsComponent } from './Components/solutions/solutions.component';
import { SucessfullComponent } from './Components/sucessfull/sucessfull.component';
import { TelcomsectorComponent } from './Components/telcomsector/telcomsector.component';
import { WirelessComponent } from './Components/wireless/wireless.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'airradio', component: AirradioComponent },
  { path: 'aviationprinter', component: AviationprinterComponent },
  { path: 'barcodescanner', component: BarcodescannerComponent },
  { path: 'documentreader', component: DocumentreaderComponent },
  { path: 'mobilecomputers', component: MobilecomputersComponent },
  { path: 'printers', component: PrintersComponent },
  { path: 'rfid', component: RfidComponent },
  { path: 'wireless', component: WirelessComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'aviationsector', component: AviationsectorComponent },
  { path: 'egovernancesector', component: EgovernancesectorComponent },
  { path: 'friendlymobilesector', component: FriendlymobilesectorComponent },
  { path: 'healthcaresector', component: HealthcaresectorComponent },
  { path: 'hospitalitysector', component: HospitalitysectorComponent },
  { path: 'manufacturingsector', component: ManufacturingsectorComponent },
  { path: 'retailsector', component: RetailsectorComponent },
  { path: 'telcomsector', component: TelcomsectorComponent },
  { path: 'formspage', component: FormsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'solutions', component: SolutionsComponent},
  { path: 'productpage', component: ProductpageComponent},
  { path: 'aviationprinterproduct', component: AviationprinterproductComponent},
  { path: 'aviationprinterproducttype', component: AviationprinterproducttypeComponent},
  { path: 'barcodescannerproduct', component: BarcodeprinterproductComponent},
  { path: 'barcodescannerproducttype', component: BarcodeprinterproducttypeComponent},
  { path: 'documentreaderproduct', component: DocumentreaderproductComponent},
  { path: 'documentreaderproducttype', component: DocumentreaderproducttypeComponent},
  { path: 'mobilecomputersproduct', component: MobilecomputersproductComponent},
  { path: 'mobilecomputersproducttype', component: MobilecomputersproducttypeComponent},
  { path: 'printerproduct', component: PrintersproductComponent},
  { path: 'sucessfull', component: SucessfullComponent},
  { path: 'career', component: CareerComponent},
  {path:'clientlist',component:ClientlistComponent},
  {path:'leadership',component:LeadershipComponent},
  {path:'partnershiplist',component:PartnerlistComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
