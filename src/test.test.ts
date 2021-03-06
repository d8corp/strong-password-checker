import strongPasswordChecker from '.'

describe('strongPasswordChecker', () => {
  test('debug', () => {
    expect(strongPasswordChecker('1Abababcaaaabababababa')).toBe(2)
  })
  test('debug2', () => {
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaaaa')).toBe(7)
    expect(strongPasswordChecker('aaaabbbbccccddeeddeeddeedd')).toBe(8)
    expect(strongPasswordChecker('A1234567890aaabbbbccccc')).toBe(4)
  })
  test('min length', () => {
    expect(strongPasswordChecker('a')).toBe(5)
    expect(strongPasswordChecker('aA1')).toBe(3)
    expect(strongPasswordChecker('13a7C0')).toBe(0)
    expect(strongPasswordChecker('1337C0d')).toBe(0)
    expect(strongPasswordChecker('1337C0d3')).toBe(0)

    expect(strongPasswordChecker('aa')).toBe(4)
    expect(strongPasswordChecker('aaa')).toBe(3)
    expect(strongPasswordChecker('aaaa')).toBe(2)
    expect(strongPasswordChecker('aaaaa')).toBe(2)

    expect(strongPasswordChecker('aaaaa')).toBe(2)
  })
  test('char conditions', () => {
    expect(strongPasswordChecker('aa')).toBe(4)
    expect(strongPasswordChecker('aaa')).toBe(3)
    expect(strongPasswordChecker('aaaa')).toBe(2)
    expect(strongPasswordChecker('aaaaa')).toBe(2)
    expect(strongPasswordChecker('aaaaaa')).toBe(2)
    expect(strongPasswordChecker('1337C')).toBe(1)
    expect(strongPasswordChecker('1337C0')).toBe(1)
    expect(strongPasswordChecker('asdasd')).toBe(2)
    expect(strongPasswordChecker('aaaaa')).toBe(2)
  })
  test('repeat', () => {
    expect(strongPasswordChecker('aaaaaaa')).toBe(2)
    expect(strongPasswordChecker('aaaaaaaa')).toBe(2)
    expect(strongPasswordChecker('aaaaaaaaa')).toBe(3)

    expect(strongPasswordChecker('aaabaaabaa')).toBe(2)
    expect(strongPasswordChecker('aaabaaabaaa')).toBe(3)
    expect(strongPasswordChecker('aaabaaabaaaaaa')).toBe(4)
    expect(strongPasswordChecker('aaabaaabaaaaaa2')).toBe(4)
    expect(strongPasswordChecker('aaabaaabaaaaaa2D')).toBe(4)
    expect(strongPasswordChecker('aaabaaabaaaaaa2Daaa')).toBe(5)
    expect(strongPasswordChecker('1111111111')).toBe(3)
  })
  test('max length', () => {
    expect(strongPasswordChecker('ABABABABABABABABABAB1')).toBe(2)

    expect(strongPasswordChecker('bbaaaaa')).toBe(2)
    expect(strongPasswordChecker('bbaaaaaa')).toBe(2)
    expect(strongPasswordChecker('bbaaaaaaa')).toBe(2)
    expect(strongPasswordChecker('bbaaaaaaaa')).toBe(2)
    expect(strongPasswordChecker('bbaaaaaaaaa')).toBe(3)
    expect(strongPasswordChecker('bbaaaaaaaaaa')).toBe(3)
    expect(strongPasswordChecker('bbaaaaaaaaaaa')).toBe(3)
    expect(strongPasswordChecker('bbaaaaaaaaaaaa')).toBe(4)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaa')).toBe(4)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaa')).toBe(4)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaa')).toBe(5)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaa')).toBe(5)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaa')).toBe(5)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaaa')).toBe(6)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaaaa')).toBe(7)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaaaaa')).toBe(8)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaaaaaa')).toBe(9)


    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaccc')).toBe(6)

    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaacc')).toBe(5)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccc')).toBe(6)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaacccc')).toBe(6)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccccc')).toBe(7)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaacccccc')).toBe(8)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaacccccca')).toBe(9)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccccccas')).toBe(9)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccccccasd')).toBe(10)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccccccasda')).toBe(11)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccccccasdas')).toBe(11)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaccccccasdasd')).toBe(12)

    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaaaccc')).toBe(6)
    expect(strongPasswordChecker('bbaaaaaaaaaaaaaaacccccc')).toBe(8)
  })
  test('next', () => {
    expect(strongPasswordChecker('A1234567890aaabbbbccccc')).toBe(4)
    expect(strongPasswordChecker('aaaabbbbccccddeeddeeddeedd')).toBe(8)
    expect(strongPasswordChecker('FFFFFFFFFFFFFFF11111111111111111111AAA')).toBe(23)
    expect(strongPasswordChecker('1Abababcaaaabababababa')).toBe(2)
  })
})
