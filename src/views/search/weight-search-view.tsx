import {h} from 'preact'
import {useMemo, useRef} from 'preact/hooks'
import {searchWeightAtom} from '../../app-state'
import {debounce} from './utils'

export default function WeightSearchView() {
  const input = useRef<HTMLInputElement>()
  const onChange = useMemo(
    () =>
      debounce(
        {
          delay: 500,
        },
        () => {
          let v = -1
          try {
            if (input.current?.value === '') {
              v = 0
            } else if (input.current?.value !== undefined) {
              v = parseFloat(input.current?.value || '')
            }
          } catch (e) {}
          if (v !== -1) {
            searchWeightAtom.set(v)
          }
        },
      ),
    [],
  )

  return (
    <div
      style={{
        fontSize: 12,
        marginLeft: 16,
      }}
    >
      <span
        style={{
          height: 16,
        }}
      >
        time(ms)
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
