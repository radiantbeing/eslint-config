function isObjectFreezeCall(node) {
    return (
        node.type === "CallExpression"
        && node.callee.type === "MemberExpression"
        && node.callee.object.name === "Object"
        && node.callee.property.name === "freeze"
    );
}

export default Object.freeze({
    create(context) {
        return {
            ExportDefaultDeclaration(node) {
                const {declaration} = node;
                if (isObjectFreezeCall(declaration)) {
                    return;
                }
                context.report({
                    fix(fixer) {
                        const sourceCode = context.getSourceCode();
                        const text = sourceCode.getText(declaration);
                        return fixer.replaceText(
                            declaration,
                            `Object.freeze(${text})`
                        );
                    },
                    messageId: "requireFreeze",
                    node: declaration
                });
            }
        };
    },
    meta: {
        docs: {
            category: "Best Practices",
            description: "enforce Object.freeze on default exports"
        },
        fixable: "code",
        messages: {
            requireFreeze: (
                "Expected 'Object.freeze('. All export values should be frozen."
            )
        },
        schema: [],
        type: "suggestion"
    }
});
