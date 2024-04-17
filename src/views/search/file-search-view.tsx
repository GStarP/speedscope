import {h} from 'preact'
import {useMemo, useRef} from 'preact/hooks'
import {debounce} from './utils'
import {searchFileAtom} from '../../app-state'

export default function FileSearchView() {
  const input = useRef<HTMLInputElement>()

  const onChange = useMemo(
    () =>
      debounce(
        {
          delay: 500,
        },
        () => {
          searchFileAtom.set(input.current?.value || '')
        },
      ),
    [],
  )

  return (
    <div
      style={{
        fontSize: 12,
      }}
    >
      <span
        style={{
          height: 16,
        }}
      >
        file
      </span>
      <input
        ref={input}
        style={{
          width: 64,
          height: 10,
          marginLeft: 4,
        }}
        onChange={onChange}
      />
    </div>
  )
}
