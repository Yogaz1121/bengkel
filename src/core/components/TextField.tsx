import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../colors';

type Props = TextInputProps & {
  error?: string;
  readOnly?: boolean;
};

/// Kolom isian standar (bisa multiline, read-only, dan menampilkan error).
export default function TextField({ error, readOnly, style, multiline, ...rest }: Props) {
  return (
    <View>
      <TextInput
        {...rest}
        multiline={multiline}
        editable={!readOnly}
        placeholderTextColor="#94A3B8"
        style={[
          styles.input,
          multiline && styles.multiline,
          readOnly && styles.readOnly,
          !!error && styles.inputError,
          style,
        ]}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.textDark,
  },
  multiline: { height: 90, textAlignVertical: 'top' },
  readOnly: { backgroundColor: colors.readOnlyFill, color: colors.textMuted },
  inputError: { borderColor: colors.danger },
  errorText: { color: colors.danger, fontSize: 11, marginTop: 4 },
});
