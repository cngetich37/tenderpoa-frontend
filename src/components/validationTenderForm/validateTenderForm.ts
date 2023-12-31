import * as yup from "yup";

export const validateTender = yup.object().shape({
  tenderNo: yup.string().required("Please enter a tender no!"),
  tenderDescription: yup
    .string()
    .required("Please enter a tender description!"),
  client: yup.string().required("Please enter a client name!"),
  siteVisitDate: yup.date().required("Please enter a valid site visit date!"),
  timeExtension: yup.number().required("Please enter the time extension!"),
  bidSecurity: yup.string().required("Please enter the bidSecurity!"),
  bidSourceInsurance: yup
    .string()
    .required("Please enter the bid Source/Insurance!"),
  closingDateTime: yup
    .date()
    .required("Please enter the valid closing date time!"),
  location: yup.string().required("Please enter the location!"),
  tenderValueDollars: yup.number().required("Please enter the tender dollar value!"),
  dollarRate: yup.number().required("Please enter the dollar rate!"),
  company: yup.string().required("Please enter the name of the company!"),
  tenderStatus: yup.string().required("Please enter the status of the tender!"),
});
