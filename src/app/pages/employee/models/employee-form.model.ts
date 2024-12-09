import { FormControl, FormGroup } from "@angular/forms";
import { Employee } from "./employee.model";

export class EmployeeAddForm extends FormGroup {
    constructor() {
        super({
            id: new FormControl(''),
            name: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl(''),
            age: new FormControl(''),
        })
    }

    getFormData(): Employee {
        let model = new Employee();
        model.id = this.get('id')?.value;
        model.name = this.get('name')?.value;
        model.email = this.get('email')?.value;
        model.phone = this.get('phone')?.value;
        model.age = this.get('age')?.value;
        return model;
    }
    setFormData(model: Employee) {
        this.get('id').setValue(model.id);
        this.get('name').setValue(model.name);
        this.get('email').setValue(model.email);
        this.get('phone').setValue(model.phone);
        this.get('age').setValue(model.age);
    }
}
