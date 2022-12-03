import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";


const Purchases = () => {


  return (
    <div>
      <MultiSelectBox
        defaultValues={undefined}
        handleSelect={undefined}
        placeholder="Select..."
        maxWidth="max-w-none"
        marginTop="mt-0"
      >
        <MultiSelectBoxItem text="" value={undefined}></MultiSelectBoxItem>;
      </MultiSelectBox>
    </div>
  );
};

export default Purchases;
