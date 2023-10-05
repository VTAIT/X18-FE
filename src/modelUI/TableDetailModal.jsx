const TableDetailModalModel = [
  {
    label: "Full name",
    fieldName: "fullName",
  },
  {
    label: "Gender",
    fieldName: "gender",
    as: "select",
    options: [
      { value: "", name: "" },
      {
        value: "male",
        name: "male",
      },
      {
        value: "female",
        name: "female",
      },
      {
        value: "other",
        name: "other",
      },
    ],
  },
  {
    label: "Email",
    fieldName: "email",
  },
  {
    label: "Phone",
    fieldName: "phone",
  },
];

export { TableDetailModalModel };
