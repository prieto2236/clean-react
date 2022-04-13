import { FieldValidationSpy } from '@/validation/test/'
import { ValidationComposite } from './validation-composite'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  validationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const validationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(validationsSpy)

  return {
    sut,
    validationsSpy
  }
}

describe('ValidationComposite', () => {
  test('Shoud return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, validationsSpy } = makeSut(fieldName)
    const errorMessage = faker.random.words()
    validationsSpy[0].error = new Error(errorMessage)
    validationsSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBe(errorMessage)
  })

  test('Shoud return falsy if no validation fails', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
