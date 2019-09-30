
function calculate(x, y){
    return(x * y)
}

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
})

QUnit.test("calc test", function(assert){
    assert.ok(calculate(5,5) == 25, "Passed")
})