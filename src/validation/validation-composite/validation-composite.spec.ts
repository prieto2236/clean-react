import { FieldValidationSpy } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  validationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const validationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]
  const sut = new ValidationComposite(validationsSpy)

  return {
    sut,
    validationsSpy
  }
}

describe('ValidationComposite', () => {
  test('Shoud return error if any validation fails', () => {
    const { sut, validationsSpy } = makeSut()
    validationsSpy[0].error = new Error('first_error_message')
    validationsSpy[1].error = new Error('second_error_message')
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
