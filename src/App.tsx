import { Box, Button, Icon } from "./components";
import { useDialog } from "./dialog";

function App() {
  const { openDialog } = useDialog();

  const handleOpenSample = () => openDialog({ id: "SampleDialog" });
  const handleOpenAnotherSample = () =>
    openDialog({ id: "AnotherSampleDialog", props: { code: 2 } });

  return (
    <main className="im-app">
      <Box direction="column" gap={[20]} padding="40px">
        <h2>Code Sample</h2>
        <p>
          Here there is some code sample where you can find components,
          customHooks and a dialog builder. You may run storybook to check
          components. Look how to do it on Readme.md
        </p>

        <h3>1- Dialog</h3>

        <Box gap={[20]}>
          <Button onClick={handleOpenSample} text="Open Sample Dialog" />
          <Button
            onClick={handleOpenAnotherSample}
            text="Open Another Sample Dialog"
            icon="close"
            variant="grey"
          />
        </Box>

        <h3>2- Icons</h3>

        <Box gap={[20]}>
          <Icon icon="close" size="large" />
          <Icon icon="done" size="large" />
        </Box>
      </Box>
    </main>
  );
}

export default App;
