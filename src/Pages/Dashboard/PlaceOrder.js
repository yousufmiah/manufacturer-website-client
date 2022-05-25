import React from "react";

const PlaceOrder = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl text-primary font-bold text-center mb-5">
        Place order
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-1/2 mx-auto">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl.No. </th>
              <th>Description</th>
              <th>Amount Tk.</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Total Price Tk. </td>
              <td> 63100</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>Delivry Charge</td>
              <td>1200</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Grand Total Amount Tk.</td>
              <td className="font-bold">70000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary">Payment</button>
    </div>
  );
};

export default PlaceOrder;
