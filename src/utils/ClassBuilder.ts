export class ClassBuilder {

    private readonly classNames: string[];

    public constructor(className: string) {
        this.classNames = [className];
    }

    /**
     * Creates a new instance of ClassBuilder.
     * @returns An instance of ClassBuilder.
     */
    public static create(initialClass: string): ClassBuilder {
        return new ClassBuilder(initialClass);
    }

    /**
     * Adds a class name to the builder.
     * @param className - The class name to add.
     * @returns The updated instance of ClassBuilder.
     */
    public add(className: string): this {
        this.classNames.push(className);
        return this;
    }

    /**
     * Adds a class name to the builder conditionally based on the provided condition.
     * If the condition is truthy, the className is added; otherwise, elseClass is added if provided.
     * @param className - The class name to add if the condition is truthy.
     * @param condition - The condition to evaluate.
     * @param elseClass - The class name to add if the condition is falsy. Optional.
     * @returns The updated instance of ClassBuilder.
     */
    public addIf(className: string|undefined, condition: unknown, elseClass?: string): this {
        if (condition) {
            if(className) {
                this.add(className);
            }
        } else if (elseClass) {
            this.add(elseClass);
        }
        return this;
    }
    /**
     * Converts the class names to a string representation.
     * @returns The class names as a string.
     */
    public build(): string {
        return this.classNames.join(" ");
    }
    
}
