
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 100000, years: 30, rate: 4.5}
  expect(calculateMonthlyPayment(values)).toEqual('506.69');
});


it("should return a result with 2 decimal places", function() {
  let values = {amount: 10000, years: 10, rate: 7};
  expect(calculateMonthlyPayment(values)).toEqual('116.11');
});

/// etc
