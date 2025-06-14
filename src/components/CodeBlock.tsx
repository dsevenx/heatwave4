interface CodeBlockProps {
  title: string
  code: string
}

export function CodeBlock({ title, code }: CodeBlockProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </div>
      <div className="bg-gray-900 text-gray-100 p-4">
        <code className="text-sm font-mono">{code}</code>
      </div>
    </div>
  )
}